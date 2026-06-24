from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()


# Enable React frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PipelineRequest(BaseModel):
    pipeline: str



@app.get("/")
def read_root():
    return {
        "Ping": "Pong"
    }



@app.post("/pipelines/parse")
def parse_pipeline(request: PipelineRequest):

    pipeline = json.loads(request.pipeline)

    nodes = pipeline.get("nodes", [])
    edges = pipeline.get("edges", [])


    num_nodes = len(nodes)
    num_edges = len(edges)


    graph = {}

    for node in nodes:
        graph[node["id"]] = []


    for edge in edges:
        graph[edge["source"]].append(
            edge["target"]
        )


    visited = set()
    stack = set()


    def dfs(node):

        visited.add(node)
        stack.add(node)


        for neighbour in graph.get(node, []):

            if neighbour not in visited:
                if not dfs(neighbour):
                    return False

            elif neighbour in stack:
                return False


        stack.remove(node)

        return True



    is_dag = True


    for node in graph:

        if node not in visited:

            if not dfs(node):
                is_dag = False
                break


    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
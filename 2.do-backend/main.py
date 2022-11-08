from fastapi import FastAPI, Response

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/ping")
async def ping(response: Response):
    response.headers['Access-Control-Allow-Origin'] = "*"
    return {"ping": "pong"}
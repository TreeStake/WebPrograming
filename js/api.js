const BASE_URL = "http://localhost:3000/movies"

const baseRequest = async ({urlPath="", method, body=null}) => {
    try{
        const reqParams = {
            method,
            headers: {"Content-Type": "application/json"},
        }

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        const response = await fetch(`${BASE_URL}${urlPath}`, reqParams)

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return response
    }catch (error){
        console.log(error)
    };
}

export const getAllMovies = async () => {
    const rawRes = await baseRequest({ method: "GET" });
    return rawRes.json()
}

export const postMovie = async (body) => {
    baseRequest({method: "POST", body: body})
}

export const editMovie = async (id, body) => {
    baseRequest({ urlPath: `/${id}`, method: "PUT", body })
}

export const deleteMovie = async (id) => {
    baseRequest({urlPath: `/${id}`, method: "DELETE"})
}

export const searchFilms = async (search = "", sort = "") => {
    let query = "";

    if (search) {
        query = `?search=${search}`;
    }
    if (sort) {
        query += query ? `&sort=${sort}` : `?sort=${sort}`;
    }

    const rawResponse = await baseRequest({ urlPath: `/f${query}`, method: "GET" });
    return await rawResponse.json();
}

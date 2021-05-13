let apiHost = "https://imagequizserverside.herokuapp.com";

let getFlower = () => {
    return fetch(apiHost + "/quizzes").then((response) => response.json());
};

let getQuizById = (id) => {
    return fetch(apiHost + "/quiz/" + id).then((response) => response.json());
};

let api = {
    getFlower: getFlower,
    getQuizById: getQuizById,
};

export default api;

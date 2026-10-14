let students = [
    {id: 0, name: 'John Doe', program: 'Bachelor of Science in Information Technology'},
    {id: 1, name: 'Jane Smith', program: 'Bachelor of Science in Information Technology'},
    {id: 2, name: 'Bob Johnson', program: 'Bachelor of Science in Information Technology'},
    {id: 3, name: 'Alice Williams', program: 'Bachelor of Science in Information Technology'},
    {id: 4, name: 'Charlie Brown', program: 'Bachelor of Science in Information Technology'},
];

const createStudent = (name, program) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = "Delete";

    article.append(h2);
    article.append(p);
    article.append(button);

    article.classList.add("list-item");

    return article;
}

const studentList = students.map((s) => {
    return createStudent(s.name, s.program);
});

const listContainer = document.querySelector("#listContainer");
studentList.forEach((s) => {
    listContainer.append(s);
});

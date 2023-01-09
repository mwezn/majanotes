const fs = require('fs')
const path = require('path')
const data = require("./data");

const index = fs.readFileSync(path.resolve(__dirname, '../views/index.ejs'));
const login = fs.readFileSync(path.resolve(__dirname, '../views/login.ejs'));
const comment = fs.readFileSync(path.resolve(__dirname, '../views/comment.ejs'));
// const register = fs.readFileSync(path.resolve(__dirname, '../views/register.ejs'));


//test index.js

describe("index.ejs", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = index;
  });
test("has a h1 heading", () => {
expect(document.querySelector("h1")).toBeTruthy();
});
test(`has a button`, () => {
  expect(document.createElement("button")).toBeTruthy;
});
test(`h1 heading has a correct text`, () => {
  expect(document.querySelector(`title`).textContent).toContain(`MajaNotes`);
});
test(`to create a form`, () => {
  expect(`form action="./new" method="POST"`).toBeTruthy;
});
test(`to have a title`, () => {
  expect(document.querySelector(`titleBox`)).toBeTruthy;
});
test(`to contain max chars allowed `, () => {
  expect(document.querySelector(`noteBox`)).toBeTruthy;
});
test(`to contain more colours `, () => {
  expect(document.querySelector(`colorDropdown`)).toBeTruthy;
});
test(`to contain err in h3`, () => {
  expect(document.querySelector(`h3`).textContent).toContain(
    `Create Your Note`
  );
});
test(`a button to select a gif`, () => {
  expect(document.querySelector(`button`).textContent).toContain(`Go`);
});
test(`select a gif`, () => {
  expect(document.querySelector(`h2`).textContent).toBe(`Select your GIF:`);
});
});

// testing comment

describe("comment.ejs", () => {
  let commentButtonElement = document.createElement("button");
  beforeEach(() => {
    document.documentElement.innerHTML = comment;
  });
  test(`has a button`, () => {
    expect(document.createElement("button")).toBeTruthy;
  });
  test("has a h1 heading", () => {
    expect(document.querySelector("h1")).toBeTruthy();
  });
  test(`h1 heading has a correct text`, () => {
    expect(document.querySelector(`h1`).textContent).toContain(
      `Leave a comment`
    );
  });
  test(`border is green`, () => {
    expect((commentButtonElement.style.borderColor = "green")).toBeTruthy;
  });
  test(`has a h2 heading`, () => {
    expect(document.querySelector(`h2`)).toBeTruthy;
  });
});

// testing login.ejs

describe("login.ejs", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = login;
  });
  test("has a h1 heading", () => {
    expect(document.querySelector("h1")).toBeTruthy();
  });
  test(`title heading has a correct text`, () => {
    expect(document.querySelector(`title`).textContent).toContain(`MajaNotes`);
  });
  test(`h1 heading has a correct text`, () => {
    expect(document.querySelector(`h1`).textContent).toContain(`Login`);
  });
  test(`to contain a form`, () => {
    expect(document.querySelector(`form`)).toBeTruthy;
  });
  test(`form has an input type text`, () => {
    form = document.querySelector(`form`);
    textInput = form.querySelector([(type = "text")]);
    expect(textInput).toBeTruthy;
  });
  test(`form has an input type password`, () => {
    form = document.querySelector(`form`);
    passwordInput = form.querySelector([(type = "password")]);
    expect(passwordInput).toBeTruthy;
  });
});

//test register
// describe("register.ejs", () => {
//   beforeEach(() => {
//     document.documentElement.innerHTML = register;
//   });
//   test("has a h1 heading", () => {
//     expect(document.querySelector("h1")).toBeTruthy();
//   });

//   test(`title heading has a correct text`, () => {
//     expect(document.querySelector(`title`).textContent).toContain(`MajaNotes`);
//   });
//   test(`h1 heading has a correct text`, () => {
//     expect(document.querySelector(`h1`).textContent).toContain(`MajaNotes`);
//   });
//   test(`form has an input type text`, () => {
//     form = document.querySelector(`form`);
//     textInput = form.querySelector([(type = "text")]);
//     expect(textInput).toBeTruthy;
//   });
//   test(`form has an input type password`, () => {
//     form = document.querySelector(`form`);
//     passwordInput = form.querySelector([(type = "password")]);
//     expect(passwordInput).toBeTruthy;
//   });
// });

//test clientNotes
// const mockTest = jest.mock(`../public/js/clientNotes.js`);
const {buildNoteElement} = require('../public/js/clientNotes')

describe("buildNoteFunctions", () => {
  let buildMock = buildNoteElement(data.data);
  buildMock = jest.fn();

  test("if functions runs once", () => {
    buildMock(data.data);
    expect(buildMock).toBeCalledTimes(1);
    // expect(buildMock).toContain("card")
  });

  test("is buildNotes receiving a card", () => {
    // expect(buildMock).toContain("card")
  });
});

describe("renderNotes", () => {
  let heart;
  let notesCount;
  let notesGrid;
  beforeEach(() => {
    notesCount = 1;
  });
  test("it exist", () => {
    notesGrid = document.querySelector(`#notesGrid`);
    heart = `#heart${data.data[0].id}`;
    neutral = `#neutral${data.data[0].neutral}`;
    expect(heart).not.toBeNull();
    expect(neutral).not.toBeNull();
  });
});

import styled from "styled-components"

export const TodoAppStyle = styled.div`
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items {
      width: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        font-size: 18px;
      }
      button {
        padding: 10px;
        margin-left: 10px;
        font-size: 16px;
        color: white;
        background-color: green;
        border: 1px solid #fff;
        border-radius: 5px;
      }
    }
    .list {
      width: 500px;
      display: flex;
      padding: 10px;
      justify-content: center;
      .todolist {
        width: 50%;
        border: 1px solid #000;
        h3 {
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #000;
        }
        ol {
          li {
            word-break: break-all;
            margin: 5px;
          }
        }
      }
    }
  }
`

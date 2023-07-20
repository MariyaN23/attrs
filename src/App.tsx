import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Form>
                <Field placeholder={"Hello"}/>
                <Field type={"date"}/>
                <Field/>
            </Form>
            <Link href={"https://peleng.by"}>Пеленг это мы</Link>
            <Link>Пеленг это не мы</Link>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs((props) => ({
    type: props.type || 'password',
    placeholder: props.placeholder || 'Type smt else'
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Link = styled.a.attrs((props) => ({
    href: props.href || 'https://www.google.com/',
    target: '_blank'
}))`
  color: red;
  font-weight: bold;
  margin-right: 10px;
`
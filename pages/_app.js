import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-modal/styles.css';
import './styles/Dashboard.css'
import './styles/Login.css'

export default function MyApp({Component,PageProps}){
    return <Component {...PageProps} ></Component>
}
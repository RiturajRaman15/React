import './style.css'
import style from './custom.module.css'

export default function Style() {
    return (
        <>
            <h1>React Style</h1>
            <h3 className={"color"}>External CSS Example</h3>
            <h3 style={{backgroundColor: 'red', color: 'black'}}>Inline CSS Example</h3>
            <h3 className={style.customcolor}>Custom Module CSS Example</h3>
        </>
    )
}
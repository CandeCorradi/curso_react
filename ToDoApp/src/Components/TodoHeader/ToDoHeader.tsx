import logoIsp from '../../assets/images-removebg-preview.png';


export default function ToDoHeader() {
      const imgStyle = {margin:'0 auto', width:'200px', height:'200px'}

    return (
        <>
          <h1>Conociendo REACT</h1>
            <img src={logoIsp} alt="Logo ISP" style = {imgStyle}/>
        </>
    )
}
/*
export const TitleLogo = ({ title, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      {title}
    </h1>
  )
}
*/
/*
export const TitleLogo = ({ title, className }) => {
  return (
    <h1 className={`${className} title-logo`}>
      <span className="assurance-color" style={{fontSize: '2.5rem'}}>TotalGuard</span> Assurance
    </h1>
  )
}
*/
export const TitleLogo = ({ title, className }) => {
  return (
    <h2 className={`${className} title-logo`}>
      <span className="totalguard-text assurance-color" style={{fontSize: '2.5rem'}}>TotalGuard</span> Assurance
    </h2>
  )
}



export const TitleSm = ({ title }) => {
  return <h1 className='titleSm text-center'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}

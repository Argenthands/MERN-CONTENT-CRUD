//nota, se extrae children de las props porque ese el nombre de la misma
export const PostProvider = ({ children }) => {
    console.log('container console log')
    return <div>
        {children}
    </div>
}
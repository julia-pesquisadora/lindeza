import '../TextInput/style.css';

export const TextInput = ({searchValue, handleChange}) =>{
    return(
    <input
        onChange={handleChange}
        value={searchValue}
        type="search"
    />
    )
    }
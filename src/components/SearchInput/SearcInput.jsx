import React, {useState} from 'react';
import styles from './SearchInput.module.scss';
import searchIcon from './search.svg'


const SearcInput = ({ fetchUser }) => {
    const [search, setSearch] = useState();

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            fetchUser(search)
        }
    }


    return (
        <div className={styles.searchWrrapper}>
            <div className={styles.inputWrapper}>
                <img src={searchIcon} alt='search'/>
                <input
                    id="searchInput"
                    className={styles.searchInput}
                    type="text"
                    onKeyPress={handleKeyPress}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Enter GitHub username"
                />
            </div>
        </div>
    );
};

export default SearcInput;
import React from "react";

const Repository = ({ repository }) => {

    if (!repository) {
        return
    }

    const styles = {
        backgroundColor: '#EC658C'
    }

    return (
        <div className="repository">
            <h3 
                className="repository__language"
                style={styles}
            >
                {repository.language}
            </h3>
            <h2 className="repository__fullname">
                {repository.full_name}
            </h2>
            <p className="repository__description">
                {repository.description}
            </p>
        </div>
    );
}

export default Repository;
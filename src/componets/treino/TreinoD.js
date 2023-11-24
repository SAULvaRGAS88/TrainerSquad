import React from 'react'

export const TreinoD = () => {
    return (
        <div style={styles.espacoTreinos}>
            <h1>TreinoD</h1>
        </div>
    )
}

const styles = {

    espacoTreinos: {
        width: "90%",
        height: 'auto',
        backgroundColor: "#fff",
        marginTop: 0,
        boxShadow: "3px 0px 10px #000",
        display: "flex",
        maxHeight: '50vh',
        overflow: 'auto',
        flexDirection: "column"
    },
}
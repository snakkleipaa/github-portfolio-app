import { Octokit } from "@octokit/core"
import { useState, useEffect } from "react";

const config = require('../utils/config')

const useUser = (username) => {

    const octokit = new Octokit({ auth: config.AUTH, userAgent: 'github-portfolio v1' })
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const getUser = async () => {

        try {
            const { data } = await octokit.request(`GET /users/${username}/repos`);

            if (data.length === 0) {
                setError("Data could not be found!")
                setTimeout(() => setError(null), 5000)
            }
            if (data.length > 0) {
                setUser({
                    found: true,
                    data: data
                })
            }
        } catch (e) {
            console.log(e)
            setError("The user could not be found!");
            setTimeout(() => setError(null), 5000)
        }
    }

    useEffect(() =>  {
        if (username) {
            getUser();
        }
    }, [username]);

    return {user, error}
}

export default useUser;

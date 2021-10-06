import { Octokit } from "@octokit/core"
import { useState, useEffect } from "react";

const config = require('../utils/config')

const useUser = (username) => {

    const octokit = new Octokit({ auth: config.AUTH, userAgent: 'github-portfolio v1' })
    const [user, setUser] = useState(null);

    const getUser = async () => {

        try {
            const { data } = await octokit.request(`GET /users/${username}/repos`);
            if (data) {
                setUser({
                    found: true,
                    data: data
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() =>  {
        if (username) {
            getUser();
        }
    }, [username]);

    return user;
}

export default useUser;

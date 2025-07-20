import db from '../config/db.js';

//handles interactions with database
export const UserModel = {
    async create({name, email}) {
        const result = await db.query(`
            INSERT INTO users (name, email)
            VALUES ($1, $2)
            RETURNING *`, 
            [name, email]
        );
        return result.rows[0];
    }
}
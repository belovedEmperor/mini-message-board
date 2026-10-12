CREATE TABLE IF NOT EXISTS messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    username VARCHAR(25) NOT NULL,
    added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES ('Hello!', 'Green'), ('Today is very weird, huh?', 'Orange'), ('Have you seen the thunderbirds yet?', 'year');

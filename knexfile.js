module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/characters.db3',
        },
        useNullAsDefault: true,
        migrations: {
        directory: './data/migrations',
        },
        seeds: {
            directory: './data/seeds',
        },
    },
    testing: {
        client: 'sqlite3',
        connection: {
          filename: './data/characters.db3',
        },
        useNullAsDefault: true,
        migrations: {
          directory: './data/migrations',
        },
        seeds: {
          directory: './data/seeds',
        },
      },
  };
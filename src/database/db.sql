CREATE TABLE IF NOT EXISTS roles (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT,
    password_hash TEXT,
    password_salt TEXT,
    id_rol uuid,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (id_rol) REFERENCES roles (id)
);

CREATE TABLE IF NOT EXISTS menus (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS pages (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    link TEXT,
    icon text,
    id_menu uuid,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (id_menu) REFERENCES menus (id)
);

CREATE TABLE IF NOT EXISTS roles_permission (
    id_rol uuid,
    id_page uuid,
    name TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id_rol, id_page),
    FOREIGN KEY (id_rol) REFERENCES roles (id),
    FOREIGN KEY (id_page) REFERENCES pages (id)
);

CREATE TABLE IF NOT EXISTS categories (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS games (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    id_categorie uuid,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (id_categorie) REFERENCES categories (id)
);

CREATE TABLE IF NOT EXISTS users_games (
    id_user uuid,
    id_game uuid,
    state TEXT,
    installed BOOLEAN,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id_user, id_game),
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_game) REFERENCES games (id)
);

CREATE TABLE IF NOT EXISTS platforms (
    id uuid DEFAULT gen_random_uuid(),
    name TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS platforms_games (
    id_platform uuid,
    id_game uuid,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    PRIMARY KEY(id_platform, id_game),
    FOREIGN KEY (id_platform) REFERENCES platforms (id),
    FOREIGN KEY (id_game) REFERENCES games (id)
);

INSERT INTO roles (name) VALUES ('Administrador'), ('Usuario');
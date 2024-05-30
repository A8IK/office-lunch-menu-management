CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL,
    user_type text COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Users Table_pkey" PRIMARY KEY (id)
)
      
CREATE TABLE IF NOT EXISTS public.menus
(
    date date NOT NULL,
    options text[] COLLATE pg_catalog."default" NOT NULL,
)

CREATE TABLE IF NOT EXISTS public.choices
(
    employee_name character varying(255) COLLATE pg_catalog."default",
    user_id integer,
    choices text[] COLLATE pg_catalog."default",
        CONSTRAINT user_id_fkey FOREIGN KEY (user_id)
)

TABLESPACE pg_default;

//for inserting query used

 INSERT INTO choices (user_id, employee_name, choices)
       VALUES ($1, $2, $3)
        RETURNING * ;`
   
 //fetching data used 
 `SELECT * FROM choices`;

{...}: {
  services.postgres = {
    enable = true;
    listen_addresses = "localhost";
    port = 5432;
    initialDatabases = [
      {
        name = "messageboard";
        user = "user";
        pass = "pass";
        schema = ./messageboard.sql;
      }
    ];
  };
}

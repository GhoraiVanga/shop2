const port = process.env.PORT || 3338;
// ...
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});

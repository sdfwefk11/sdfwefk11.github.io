function Moviequal({ url, quality }) {
  return (
    <a href={url} download>
      {quality}
    </a>
  );
}

export default Moviequal;

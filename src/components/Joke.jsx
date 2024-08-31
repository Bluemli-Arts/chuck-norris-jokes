/* eslint-disable react/prop-types */
export default function Joke({joke}) {
  return (
    <div className="joke">
      <img src={joke.icon_url} alt="Icon showing the head of Chuck Norris" />
      <p>{joke.value}</p>
    </div>
  );
}

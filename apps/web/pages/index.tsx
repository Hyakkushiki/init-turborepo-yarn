import { Button } from "ui";

export default function Web() {
  const fetchHello = async () => {
    const response = await fetch("/");
    const data = await response.json();
    alert(data);
  };

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}

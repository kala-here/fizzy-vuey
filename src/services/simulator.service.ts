export async function fetchSimulator() {
  return (
    await fetch('https://testapi.jasonwatmore.com/products')
  ).json()
}
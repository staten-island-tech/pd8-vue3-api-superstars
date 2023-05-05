let data = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
data = await data.json()
export { data }

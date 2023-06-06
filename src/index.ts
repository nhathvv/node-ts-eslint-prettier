type Handle = () => Promise<string>
const fullName: Handle = () => Promise.resolve('Nhathv')
fullName().then((res) => {
  console.log(res)
})

interface Params {
  params: {name: string}
}

export default function Page({params}: Params) {
  return (
    <div className="flex min-h-screen flex flex-col items-center justify-between">
      {params.name}
    </div>
  )
}

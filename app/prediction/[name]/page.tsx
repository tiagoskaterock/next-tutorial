export default function Name({params}: any) {

  return (
    <div className="flex min-h-screen flex flex-col items-center justify-between">
      {params.name}
    </div>
  )
}

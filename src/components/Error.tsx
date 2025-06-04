export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className=" bg-red-600 text-white text-center text-xs py-2 font-semibold uppercase my-2">{children}</p>
  )
}

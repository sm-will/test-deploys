import { useRouter } from 'next/router'

export default function CatchallPage({ query }) {
  const router = useRouter()
  console.log(router.query)
  return <h1>catchall route {JSON.stringify(router.query)}</h1>
}

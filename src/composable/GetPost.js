import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const fetchData = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 3000))
      let data = await fetch(`http://localhost:3000/posts/${id}`)

      if (!data.ok) {
        throw new Error('Tidak ada data bung!')
      }
      post.value = await data.json()
    } catch (err) {
      error.value = err.message
    }
  }
  return { post, fetchData, error }
}

export default getPost

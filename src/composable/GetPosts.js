import { ref } from 'vue'
import db from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  const loading = ref(true)

  const fetchData = async () => {
    loading.value = true
    try {
      const res = await getDocs(collection(db, 'posts'))
      if (res.empty) {
        throw new Error('No posts available')
      }
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  return { posts, fetchData, error }
}

export default getPosts

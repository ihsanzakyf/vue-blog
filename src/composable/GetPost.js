import { ref } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import db from '@/firebase/config'

export default function usePost(id) {
  const post = ref(null)
  const error = ref(null)
  const loading = ref(true)
  const router = useRouter()

  const fetchData = async () => {
    loading.value = true
    try {
      const docRef = doc(db, 'posts', id)
      const res = await getDoc(docRef)

      if (!res.exists()) {
        router.replace('/not-found') // tanpa MainLayout
      } else {
        post.value = { ...res.data(), id: res.id }
      }
    } catch (err) {
      error.value = 'Failed to fetch post.'
      router.replace('/not-found')
    } finally {
      loading.value = false
    }
  }

  return {
    post,
    error,
    loading,
    fetchData,
  }
}

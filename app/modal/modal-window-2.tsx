import ThemeView from '@/components/ui/ThemeView'
import ThemeText from '@/components/ui/ThemeText'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import ThemeButton from '@/components/ui/ThemeButton'
import { router } from 'expo-router'

const ModalWindow2 = () => {
  return (
    <ThemeView className="flex-1 items-center justify-center" bgColor="#A52182">
      <ThemeText>ModalWindow2</ThemeText>

      <ThemeButton onPress={() => router.dismiss()}>Cerrar</ThemeButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemeView>
  )
}

export default ModalWindow2
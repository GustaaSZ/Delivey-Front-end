import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import BackButton from '../components/backButton';
import Constants from 'expo-constants';
import { useState } from 'react';
import { Section } from '../components/section';
import { router } from 'expo-router';
import { usePayment } from '../components/contextCard';
import { TextInputMask } from 'react-native-masked-text';

export default function Payment() {
    // constante pra definir uma altura padrão e responsiva na view
    const statusBarHeight = Constants.statusBarHeight;

    // Variaveis para ler a entrada dos usuários
    const {userName, setUserName} = usePayment();
    const {userAddressEmail, setUserAddressEmail} = usePayment();
    const {userPhone, setUserPhone} = usePayment();
    const {userAddress, setUserAddress} = usePayment();
    const [complement, setComplement] = React.useState('');
    const [cep, setCep] = React.useState('');

 return (
    <View className='flex flex-1 bg-zinc-900'>
        <View className='items-center justify-between'>
            <View className="w-full px-2 my-10 mr-2" style={{ marginTop: statusBarHeight + 15}}>
                <BackButton rota='/shoppingCart'/>
            </View>
            <View className='flex items-center justify-center'>
                <Text className='text-zinc-200 text-4xl'> Página de pagamento</Text>
            </View>
            <View className='px-6'>
                <Section 
                    name="Insira seus dados"
                    size="text-xl"
                    label=""
                    action={ () => console.log("Clicou no veja mais")}
                />

            </View>
        </View>

        {/* VIEW DOS INPUTS */}
        <View className='px-6 gap-10'>

            {/* Nome */}
            <TextInput 
                className='w-100 px-4 h-10 border border-zinc-600 rounded-lg text-zinc-300' 
                onChangeText={setUserName} 
                value={userName}
                inputMode='text'
                placeholder='Nome'
                placeholderTextColor={'#a1a1aa'}
                underlineColorAndroid='transparent'
                // editable
            >
            </TextInput>

            {/* E-mail */}
            <TextInput 
                className='w-100 px-4 h-10 border border-zinc-600 rounded-lg text-zinc-300' 
                onChangeText={setUserAddressEmail} 
                value={userAddressEmail}
                placeholder='Email'
                keyboardType='email-address'
                placeholderTextColor={'#a1a1aa'}
                underlineColorAndroid='transparent'
                // editable
            >
            </TextInput>

            {/* Numero */}
            <TextInputMask 
                type='cel-phone'
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
                style={{width: 340, borderColor: '#52525b',borderWidth: 1 ,borderRadius: 8, height: 36, paddingLeft: 16, color: '#d4d4d8'}}
                onChangeText={setUserPhone} 
                value={userPhone}
                placeholder='Numero de telefone'
                placeholderTextColor={'#a1a1aa'}
                underlineColorAndroid='transparent'
            >
            </TextInputMask>

            {/* Endereço */}
            <TextInput 
                className='w-100 px-4 h-10 border border-zinc-600 rounded-lg text-zinc-300' 
                onChangeText={setUserAddress} 
                value={userAddress}
                inputMode='text'
                placeholder='Endereço'
                placeholderTextColor={'#a1a1aa'}
                underlineColorAndroid='transparent'
            >
            </TextInput>
            
            {/* Complemento */}
            <TextInput 
                className='w-100 px-4 h-10 border border-zinc-600 rounded-lg text-zinc-300' 
                onChangeText={setComplement} 
                value={complement}
                inputMode='text'
                placeholder='Complemento'
                placeholderTextColor={'#a1a1aa'}
                underlineColorAndroid='transparent'
            >
            </TextInput>

            {/* CEP */}
            <TextInput 
                className='w-100 px-4 h-10 border border-zinc-600 rounded-lg text-zinc-300' 
                onChangeText={setCep} 
                value={cep}
                keyboardType='number-pad'
                placeholder='CEP'
                placeholderTextColor={'#a1a1aa'}
                underlineColorAndroid='transparent'
            >
            </TextInput>
        </View>

        <View className='items-center justify-center mt-10 px-10'>
        <Pressable 
            style={{backgroundColor: '#fcd34d'}}
            className='w-full h-14 mt-10 flex items-center justify-center rounded-xl'
            onPress={ () => router.navigate('/paymentCard') }
            >   
            <Text className='text-black font-bold text-xl'>Próximo</Text>
        </Pressable>

        </View>
    </View>
   
  );
}
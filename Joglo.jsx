/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/Joglo.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Joglo(props) {
  const { nodes, materials } = useGLTF('./models/Joglo.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-3.57, 8.03, -1.81]} scale={[30.89, 22.33, 27.96]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-3.57, 8.64, -1.81]} scale={[25.47, 18.41, 23.06]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane001_4.geometry} material={materials['Material.007']} />
      </group>
      <group position={[-3.44, 35.52, -1.84]} scale={[37.58, 37.58, 33.57]}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.lantai.geometry} material={materials['Material.003']} position={[-3.57, 8.08, -1.81]} scale={[30.89, 22.33, 27.96]} />
      <mesh geometry={nodes.rooftile.geometry} material={materials['Material.008']} position={[-43.08, 37.29, -38.09]} rotation={[1.22, 0, 0]} scale={[0.91, 0.92, 0.92]} />
      <mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} position={[-140.98, 71.74, -95.53]} rotation={[1.22, 0, 0]} />
      <mesh geometry={nodes.diagonal_rooftile.geometry} material={materials['Material.008']} position={[-1.1, 29.24, -54.94]} rotation={[1.3, 0.16, -0.81]} scale={5.87} />
      <mesh geometry={nodes.Cone.geometry} material={materials['Material.008']} position={[-3.1, 58.56, -1.78]} scale={[0.59, 1, 0.34]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.009']} position={[-7.85, 17.76, -2.48]} scale={[19.02, 1, 4.55]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.009']} position={[9.87, 17.66, 0.79]} scale={[1, 0.61, 0.96]} />
      <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[-41.42, -27.4, 47.99]} scale={6.54} />
    </group>
  )
}

useGLTF.preload('./models/Joglo.glb')
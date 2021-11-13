import React from 'react';
import Svg, {Path,Line,Polyline,G,Rect} from 'react-native-svg';

export default function Tooth({color,height,width}) {
  
    return (  
        <Svg 
        style="enable-background:new 0 0 32 32;" 
        version="1.1" 
        viewBox="0 0 32 32" 
        height={height} 
        version="1.1"
        width={width}
        fill={color}
        stroke={color}
        >
            <G id="Guides"/>
            <G id="_x32_0"/>
            <G id="_x31_9"/>
            <G id="_x31_8"/>
            <G id="_x31_7"/>
            <G id="_x31_6"/>
            <G id="_x31_5"/>
            <G id="_x31_4"/>
            <G id="_x31_3"/>
            <G id="_x31_2"/>
            <G id="_x31_1"/>
            <G id="_x31_0"/>
            <G id="_x30_9"/>
            <G id="_x30_8"/>
            <G id="_x30_7"/>
            <G id="_x30_6"/>
            <G id="_x30_5"/>
            <G id="_x30_4"/>
            <G id="_x30_3"/>
            <G id="_x30_2"/>
            <G id="_x30_1">
            <Path d="M22,2h-2c-1.4794922,0-2.9082031,0.5576172-4,1.53125C14.9082031,2.5576172,13.4794922,2,12,2h-2   c-4.4111328,0-8,3.5888672-8,8v3.9023438c0,4.7978516,1.1337891,9.6015625,3.2792969,13.8945313   C5.9609375,29.1552734,7.3271484,30,8.8466797,30c1.7197266,0,3.2392578-1.0957031,3.7822266-2.7265625l1.6875-5.0625   C14.5585938,21.4863281,15.2333984,21,16.0039063,21c0.7626953,0,1.4375,0.4863281,1.6796875,1.2109375l1.6865234,5.0625   C19.9140625,28.9042969,21.4335938,30,23.1533203,30c1.5195313,0,2.8857422-0.8447266,3.5673828-2.2041016   C28.8662109,23.5039063,30,18.7001953,30,13.9023438V10C30,5.5888672,26.4111328,2,22,2z M28,13.9023438   c0,4.4882813-1.0605469,8.9833984-3.0683594,12.9980469C24.5927734,27.5791016,23.9111328,28,23.1533203,28   c-0.8564453,0-1.6142578-0.5458984-1.8857422-1.359375l-1.6875-5.0625C19.0654297,20.0361328,17.6279297,19,15.9960938,19   c-1.6240234,0-3.0615234,1.0361328-3.5761719,2.578125l-1.6884766,5.0625C10.4609375,27.4541016,9.703125,28,8.8466797,28   c-0.7578125,0-1.4394531-0.4208984-1.7783203-1.0986328C5.0605469,22.8857422,4,18.390625,4,13.9023438V10   c0-3.3085938,2.6914063-6,6-6h2c1.25,0,2.4462891,0.5986328,3.2011719,1.6015625   c0.3769531,0.5019531,1.2207031,0.5019531,1.5976563,0C17.5537109,4.5986328,18.75,4,20,4h2c3.3085938,0,6,2.6914063,6,6   V13.9023438z"/>
            </G>
            </Svg>
  );
}
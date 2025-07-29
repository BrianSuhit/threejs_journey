varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    //float strength = vUv.x;

    //gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);

    // pattern 1
    //gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);

    // pattern 2
    //gl_FragColor = vec4(vUv, 0.0, 1.0);

    // pattern 3 ( 4 is the same - change vUv.x for Y)
    //gl_FragColor = vec4(strength, strength, strength, 1.0);

    // pattern 23
    float strength = random(vUv);
    gl_FragColor = vec4(strength, strength, strength, 1.0);
}
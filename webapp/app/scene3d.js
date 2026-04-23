/* 3D Animated Scene - Clouds, Birds, Floating Islands */
(function() {
    var container = document.getElementById('scene3d');
    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x87CEEB, 0.0008);

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 200, 600);
    camera.lookAt(0, 100, 0);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lighting
    var ambientLight = new THREE.AmbientLight(0x8899bb, 0.6);
    scene.add(ambientLight);
    var sunLight = new THREE.DirectionalLight(0xffeedd, 1.2);
    sunLight.position.set(200, 400, 100);
    scene.add(sunLight);
    var hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x3a7d44, 0.4);
    scene.add(hemiLight);

    // === FLOATING ISLANDS ===
    var islands = [];
    function createIsland(x, y, z, scale) {
        var group = new THREE.Group();
        // Rock base
        var rockGeo = new THREE.DodecahedronGeometry(30 * scale, 1);
        rockGeo.scale(1, 0.5, 1);
        var rockMat = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
        var rock = new THREE.Mesh(rockGeo, rockMat);
        rock.position.y = -10 * scale;
        group.add(rock);
        // Grass top
        var grassGeo = new THREE.CylinderGeometry(28*scale, 30*scale, 6*scale, 8);
        var grassMat = new THREE.MeshLambertMaterial({ color: 0x4CAF50 });
        var grass = new THREE.Mesh(grassGeo, grassMat);
        grass.position.y = 5 * scale;
        group.add(grass);
        // Trees
        for (var t = 0; t < 3; t++) {
            var trunk = new THREE.Mesh(
                new THREE.CylinderGeometry(1.5*scale, 2*scale, 15*scale, 6),
                new THREE.MeshLambertMaterial({ color: 0x8B4513 })
            );
            trunk.position.set((Math.random()-0.5)*20*scale, 15*scale, (Math.random()-0.5)*20*scale);
            group.add(trunk);
            var leaves = new THREE.Mesh(
                new THREE.SphereGeometry(8*scale, 6, 6),
                new THREE.MeshLambertMaterial({ color: 0x228B22 })
            );
            leaves.position.copy(trunk.position);
            leaves.position.y += 12 * scale;
            group.add(leaves);
        }
        group.position.set(x, y, z);
        group.userData = { baseY: y, speed: 0.3 + Math.random()*0.5, offset: Math.random()*Math.PI*2 };
        scene.add(group);
        islands.push(group);
    }
    createIsland(-300, 80, -200, 1.5);
    createIsland(350, 120, -400, 1.2);
    createIsland(-150, 160, -600, 1.0);
    createIsland(200, 60, -100, 0.8);
    createIsland(500, 140, -500, 1.3);
    createIsland(-450, 100, -350, 1.1);

    // === CLOUDS ===
    var clouds = [];
    function createCloud(x, y, z) {
        var group = new THREE.Group();
        var mat = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 });
        var puffs = 4 + Math.floor(Math.random()*4);
        for (var i = 0; i < puffs; i++) {
            var s = 15 + Math.random()*25;
            var puff = new THREE.Mesh(new THREE.SphereGeometry(s, 8, 6), mat);
            puff.position.set((Math.random()-0.5)*60, (Math.random()-0.5)*15, (Math.random()-0.5)*30);
            puff.scale.y = 0.6;
            group.add(puff);
        }
        group.position.set(x, y, z);
        group.userData = { speed: 5 + Math.random()*10 };
        scene.add(group);
        clouds.push(group);
    }
    for (var c = 0; c < 20; c++) {
        createCloud(
            (Math.random()-0.5)*2500,
            200 + Math.random()*300,
            (Math.random()-0.5)*2000 - 300
        );
    }

    // === BIRDS ===
    var birds = [];
    function createBird(x, y, z) {
        var group = new THREE.Group();
        var bodyMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        // Body
        var body = new THREE.Mesh(new THREE.SphereGeometry(2, 6, 4), bodyMat);
        body.scale.set(1, 0.6, 2);
        group.add(body);
        // Left wing
        var lWing = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 2),
            new THREE.MeshLambertMaterial({ color: 0x444444, side: THREE.DoubleSide })
        );
        lWing.position.set(-4, 0.5, 0);
        lWing.rotation.z = 0.3;
        lWing.name = 'leftWing';
        group.add(lWing);
        // Right wing
        var rWing = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 2),
            new THREE.MeshLambertMaterial({ color: 0x444444, side: THREE.DoubleSide })
        );
        rWing.position.set(4, 0.5, 0);
        rWing.rotation.z = -0.3;
        rWing.name = 'rightWing';
        group.add(rWing);
        group.position.set(x, y, z);
        group.userData = {
            speed: 30 + Math.random()*40,
            flapSpeed: 3 + Math.random()*3,
            radius: 100 + Math.random()*200,
            angle: Math.random()*Math.PI*2,
            centerX: x,
            centerZ: z,
            baseY: y
        };
        scene.add(group);
        birds.push(group);
    }
    // Flock of birds
    for (var b = 0; b < 15; b++) {
        createBird(
            (Math.random()-0.5)*800,
            180 + Math.random()*200,
            (Math.random()-0.5)*800 - 200
        );
    }

    // === SKY GRADIENT (large sphere) ===
    var skyGeo = new THREE.SphereGeometry(4000, 32, 15);
    var skyMat = new THREE.ShaderMaterial({
        uniforms: { topColor: { value: new THREE.Color(0x0077ff) }, bottomColor: { value: new THREE.Color(0x87CEEB) }, offset: { value: 400 }, exponent: { value: 0.6 } },
        vertexShader: 'varying vec3 vWorldPos; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorldPos=wp.xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
        fragmentShader: 'uniform vec3 topColor; uniform vec3 bottomColor; uniform float offset; uniform float exponent; varying vec3 vWorldPos; void main(){ float h=normalize(vWorldPos+offset).y; gl_FragColor=vec4(mix(bottomColor,topColor,max(pow(max(h,0.0),exponent),0.0)),1.0); }',
        side: THREE.BackSide
    });
    scene.add(new THREE.Mesh(skyGeo, skyMat));

    // === WATER PLANE ===
    var waterGeo = new THREE.PlaneGeometry(8000, 8000);
    var waterMat = new THREE.MeshLambertMaterial({ color: 0x1a8cff, transparent: true, opacity: 0.5 });
    var water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -50;
    scene.add(water);

    // === ANIMATION LOOP ===
    var clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        var t = clock.getElapsedTime();
        var dt = clock.getDelta();

        // Float islands
        islands.forEach(function(island) {
            island.position.y = island.userData.baseY + Math.sin(t * island.userData.speed + island.userData.offset) * 8;
            island.rotation.y += 0.001;
        });

        // Move clouds
        clouds.forEach(function(cloud) {
            cloud.position.x += cloud.userData.speed * 0.02;
            if (cloud.position.x > 1500) cloud.position.x = -1500;
        });

        // Animate birds
        birds.forEach(function(bird) {
            bird.userData.angle += 0.005 * (bird.userData.speed / 30);
            bird.position.x = bird.userData.centerX + Math.cos(bird.userData.angle) * bird.userData.radius;
            bird.position.z = bird.userData.centerZ + Math.sin(bird.userData.angle) * bird.userData.radius;
            bird.position.y = bird.userData.baseY + Math.sin(t * 1.5) * 5;
            bird.rotation.y = bird.userData.angle + Math.PI / 2;
            // Flap wings
            var flapAngle = Math.sin(t * bird.userData.flapSpeed) * 0.6;
            bird.children.forEach(function(child) {
                if (child.name === 'leftWing') child.rotation.z = 0.3 + flapAngle;
                if (child.name === 'rightWing') child.rotation.z = -0.3 - flapAngle;
            });
        });

        // Gentle camera sway
        camera.position.x = Math.sin(t * 0.1) * 30;
        camera.position.y = 200 + Math.sin(t * 0.15) * 10;
        camera.lookAt(0, 120, -200);

        renderer.render(scene, camera);
    }
    animate();

    // Resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();
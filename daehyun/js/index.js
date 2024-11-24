document.addEventListener('DOMContentLoaded', () => {
    const poster = document.querySelector('.poster.background'); // 음표가 나타날 영역
    
    const assets = [
        { type: 'text', content: '♪',minSize: 150, maxSize: 300 },
        { type: 'text', content: '♫',minSize: 150, maxSize: 300 },
        { type: 'text', content: '♩',minSize: 150, maxSize: 300 },
        { type: 'text', content: '♬',minSize: 150, maxSize: 300 },
        { type: 'svg', file: './assets/Ellipse 1.svg',minSize: 100, maxSize: 200 },
        { type: 'svg', file: './assets/Ellipse 2.svg' ,minSize: 50, maxSize: 300},
        { type: 'svg', file: './assets/Ellipse 4.svg' ,minSize: 100, maxSize: 200},
        { type: 'svg', file: './assets/Ellipse 5.svg' ,minSize: 50, maxSize: 300},
        { type: 'svg', file: './assets/Ellipse 6.svg' ,minSize: 100, maxSize: 200},
        { type: 'svg', file: './assets/Ellipse 7.svg' ,minSize: 100, maxSize: 200},
        { type: 'svg', file: './assets/all that jazz!.svg' ,minSize: 400, maxSize: 600},
        { type: 'svg', file: './assets/all that jazz!2.svg' ,minSize: 400, maxSize: 600},
        { type: 'svg', file: './assets/jazz for your soul....svg' ,minSize: 400, maxSize: 600},
        { type: 'svg', file: './assets/Vector 1.svg' ,minSize: 400, maxSize: 600},
        { type: 'svg', file: './assets/Vector 2.svg' ,minSize: 400, maxSize: 600},
        { type: 'svg', file: './assets/Vector 3.svg' ,minSize: 300, maxSize: 600},
        { type: 'svg', file: './assets/Vector 4.svg' ,minSize: 300, maxSize: 600},
        { type: 'svg', file: './assets/Vector 5.svg' ,minSize: 300, maxSize: 600},
        { type: 'svg', file: './assets/Vector 6.svg' ,minSize: 300, maxSize: 600},
        { type: 'svg', file: './assets/Vector 7.svg' ,minSize: 400, maxSize: 600}
    ];
     // 랜덤으로 사용할 음표, assets 리스트
     poster.addEventListener('click', async (event) => {
        // 랜덤 아이템 선택
        const randomAsset = assets[Math.floor(Math.random() * assets.length)];

        // 랜덤 크기 생성 (범위에 따라)
        const randomSize = Math.floor(
            Math.random() * (randomAsset.maxSize - randomAsset.minSize) + randomAsset.minSize
        );

        // 새로운 요소 생성
        const newElement = document.createElement('div');

        if (randomAsset.type === 'svg') {
            // 외부 SVG 파일 로드
            const response = await fetch(randomAsset.file);
            const svgContent = await response.text();
            newElement.innerHTML = svgContent;

            // SVG 크기 설정
            const svgElement = newElement.querySelector('svg');
            if (svgElement) {
                svgElement.setAttribute('width', `${randomSize}px`);
                svgElement.setAttribute('height', `${randomSize}px`);
            }
        } else if (randomAsset.type === 'text') {
            // 텍스트(음표) 처리
            newElement.textContent = randomAsset.content;
            newElement.style.fontSize = `${randomSize}px`; // 랜덤 텍스트 크기
            newElement.style.color = 'white';
        }

        // 위치 설정
        const rect = poster.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        newElement.style.position = 'absolute';
        newElement.style.left = `${x}px`;
        newElement.style.top = `${y}px`;
        newElement.style.pointerEvents = 'none'; // 클릭 방지

        // 요소 추가
        const footprints = document.querySelector('.footprints');
        footprints.appendChild(newElement);
    });
});
"""
클로버 와이어프레임 스크린샷 캡처 스크립트
"""
import asyncio
from playwright.async_api import async_playwright
import os

SCREENSHOTS_DIR = "/Users/songkyuyong/Documents/창/필터링크/클로드 테스트/clover-wireframe/screenshots"
URL = "http://localhost:8080"

async def capture_screens():
    os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 430, "height": 932})

        await page.goto(URL)
        await page.wait_for_timeout(2000)

        # 1. 온보딩 슬라이드 1
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/01_onboarding_1.png")
        print("1. 온보딩 1 캡처 완료")

        # 2. 온보딩 슬라이드 2
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/02_onboarding_2.png")
        print("2. 온보딩 2 캡처 완료")

        # 3. 온보딩 슬라이드 3
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/03_onboarding_3.png")
        print("3. 온보딩 3 캡처 완료")

        # 4. 휴대폰 번호 입력
        await page.click("button:has-text('시작하기')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/04_phone_input.png")
        print("4. 휴대폰 번호 입력 캡처 완료")

        # 5. 인증번호 입력 (번호 입력 후)
        await page.fill("input[type='tel']", "01012345678")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('인증번호 받기')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/05_verification_code.png")
        print("5. 인증번호 입력 캡처 완료")

        # 6. 기본정보 - 성별
        await page.fill("input[type='tel']", "123456")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/06_basic_gender.png")
        print("6. 성별 선택 캡처 완료")

        # 7. 기본정보 - 생년월일
        await page.click("text=남성")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/07_basic_birthday.png")
        print("7. 생년월일 캡처 완료")

        # 8. 기본정보 - 거주지역
        await page.fill("input.box-input.year", "1995")
        await page.fill("input.box-input.month", "5")
        await page.fill("input.box-input.day", "15")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/08_basic_location.png")
        print("8. 거주지역 캡처 완료")

        # 9. 기본정보 - 음주
        await page.click("text=판교")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/09_basic_drinking.png")
        print("9. 음주여부 캡처 완료")

        # 10. 기본정보 - 흡연
        await page.click("text=가끔 마셔요")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/10_basic_smoking.png")
        print("10. 흡연여부 캡처 완료")

        # 11. 기본정보 - 종교
        await page.click("text=비흡연")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/11_basic_religion.png")
        print("11. 종교 캡처 완료")

        # 12. 기본정보 - 관심사
        await page.click("text=무교")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/12_basic_interests.png")
        print("12. 관심사 캡처 완료")

        # 13. 기본정보 - 닉네임
        interests = await page.query_selector_all(".interest-chip")
        for i in range(3):
            if i < len(interests):
                await interests[i].click()
                await page.wait_for_timeout(100)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/13_basic_nickname.png")
        print("13. 닉네임 캡처 완료")

        # 14. 클로버 - 직업
        await page.fill("input.border-input", "클로버")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('완료')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/14_clover_job.png")
        print("14. 직업 캡처 완료")

        # 15. 클로버 - 학력
        await page.click("text=직장인")
        await page.wait_for_timeout(200)
        await page.select_option("select", "large")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/15_clover_education.png")
        print("15. 학력 캡처 완료")

        # 16. 클로버 - 자산
        await page.click("text=학사")
        await page.wait_for_timeout(200)
        await page.click("text=SKY")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/16_clover_asset.png")
        print("16. 자산 캡처 완료")

        # 17. 클로버 - 외모
        await page.click("text=본인")
        await page.wait_for_timeout(200)
        await page.click("text=상위")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/17_clover_appearance.png")
        print("17. 외모 캡처 완료")

        # 18. 클로버 - 성격
        await page.select_option("select", "175")
        await page.wait_for_timeout(200)
        photos = await page.query_selector_all(".photo-item")
        for i in range(2):
            if i < len(photos):
                await photos[i].click()
                await page.wait_for_timeout(100)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/18_clover_personality.png")
        print("18. 성격(자기소개) 캡처 완료")

        # 19. 약관 동의
        await page.fill("textarea", "안녕하세요! 저는 서울에서 일하는 개발자입니다. 운동과 독서를 좋아하고, 주말에는 카페에서 커피 마시는 것을 즐깁니다. 새로운 사람들을 만나는 것을 좋아해요!")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('제출하기')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/19_terms.png")
        print("19. 약관 동의 캡처 완료")

        # 20. 가입 완료
        await page.click("text=전체 동의")
        await page.wait_for_timeout(300)
        await page.click("button:has-text('다음')")
        await page.wait_for_timeout(500)
        await page.screenshot(path=f"{SCREENSHOTS_DIR}/20_complete.png")
        print("20. 가입 완료 캡처 완료")

        await browser.close()
        print(f"\n모든 스크린샷이 {SCREENSHOTS_DIR}에 저장되었습니다!")

if __name__ == "__main__":
    asyncio.run(capture_screens())

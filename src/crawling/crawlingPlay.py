import re
import time
import traceback

from selenium import webdriver
from selenium.common import TimeoutException, NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import pymysql

# 연극 id 삽입
def createUrlOfInterpark():
    urlList = []
    baseUrl = 'https://tickets.interpark.com/goods'
    urlList.append(baseUrl + '/' + str(23004670))
    # urlList.append(baseUrl + '/' + str(19018229))
    # urlList.append(baseUrl + '/' + str(23005656))
    # urlList.append(baseUrl + '/' + 'L0000039')
    # urlList.append(baseUrl + '/' + str(22001159))
    # urlList.append(baseUrl + '/' + str(21013096))
    # urlList.append(baseUrl + '/' + str(20011346))
    # urlList.append(baseUrl + '/' + str(23005704))
    # urlList.append(baseUrl + '/' + str(23007040))
    # urlList.append(baseUrl + '/' + str(21013249))
    # urlList.append(baseUrl + '/' + str(22014277))
    # urlList.append(baseUrl + '/' + str(23003651))
    # urlList.append(baseUrl + '/' + str(23005466))
    # urlList.append(baseUrl + '/' + str(22001006))
    # urlList.append(baseUrl + '/' + str(22017895))
    # urlList.append(baseUrl + '/' + str(23005252))
    # urlList.append(baseUrl + '/' + str(23006386))
    # urlList.append(baseUrl + '/' + str(23005230))
    # urlList.append(baseUrl + '/' + 'L0000038')
    # urlList.append(baseUrl + '/' + str(21004992))
    # urlList.append(baseUrl + '/' + str(23003616))
    # urlList.append(baseUrl + '/' + str(23007444))
    # urlList.append(baseUrl + '/' + str(23006560))
    # urlList.append(baseUrl + '/' + str(23006452))
    # urlList.append(baseUrl + '/' + str(23003823))
    # urlList.append(baseUrl + '/' + str(23006433))
    # urlList.append(baseUrl + '/' + str(23004562))
    # urlList.append(baseUrl + '/' + str(23006686))
    # urlList.append(baseUrl + '/' + str(23001991))
    # urlList.append(baseUrl + '/' + str(21002623))
    # urlList.append(baseUrl + '/' + str(21005281))
    # urlList.append(baseUrl + '/' + str(18001569))
    # urlList.append(baseUrl + '/' + str(21004172))
    # urlList.append(baseUrl + '/' + str(17018375))
    # urlList.append(baseUrl + '/' + str(23006753))
    # urlList.append(baseUrl + '/' + str(23007601))
    # urlList.append(baseUrl + '/' + str(23005639))
    # urlList.append(baseUrl + '/' + str(23007424))
    # urlList.append(baseUrl + '/' + str(23002001))
    # urlList.append(baseUrl + '/' + str(23005390))
    # urlList.append(baseUrl + '/' + str(23003504))
    # urlList.append(baseUrl + '/' + str(23005939))
    # urlList.append(baseUrl + '/' + str(23005776))
    # urlList.append(baseUrl + '/' + str(23005422))
    # urlList.append(baseUrl + '/' + str(23004779))
    # urlList.append(baseUrl + '/' + str(22001569))
    # urlList.append(baseUrl + '/' + str(23003750))
    # urlList.append(baseUrl + '/' + str(23006862))
    # urlList.append(baseUrl + '/' + str(23006181))
    # urlList.append(baseUrl + '/' + str(23005359))
    # urlList.append(baseUrl + '/' + str(23007555))
    # urlList.append(baseUrl + '/' + str(23005584))
    # urlList.append(baseUrl + '/' + str(23005115))
    # urlList.append(baseUrl + '/' + str(23007114))
    # urlList.append(baseUrl + '/' + str(23007110))
    # urlList.append(baseUrl + '/' + str(23007111))
    # urlList.append(baseUrl + '/' + str(23007112))
    # urlList.append(baseUrl + '/' + str(23005788))
    # urlList.append(baseUrl + '/' + str(19001540))
    # urlList.append(baseUrl + '/' + str(18013732))
    # urlList.append(baseUrl + '/' + str(22004566))
    # urlList.append(baseUrl + '/' + str(23005687))
    # urlList.append(baseUrl + '/' + str(23007822))
    # urlList.append(baseUrl + '/' + str(23006746))
    # urlList.append(baseUrl + '/' + str(23006048))
    # urlList.append(baseUrl + '/' + str(23006047))
    # urlList.append(baseUrl + '/' + str(23007139))
    # urlList.append(baseUrl + '/' + str(23005843))
    # urlList.append(baseUrl + '/' + str(23007158))
    # urlList.append(baseUrl + '/' + str(23007043))
    # urlList.append(baseUrl + '/' + str(23007127))
    # urlList.append(baseUrl + '/' + str(23007118))
    # urlList.append(baseUrl + '/' + str(23006293))
    # urlList.append(baseUrl + '/' + str(23007146))
    # urlList.append(baseUrl + '/' + str(23007133))
    # urlList.append(baseUrl + '/' + str(23007128))
    # urlList.append(baseUrl + '/' + str(23006689))
    # urlList.append(baseUrl + '/' + str(23007115))
    # urlList.append(baseUrl + '/' + str(23007450))
    # urlList.append(baseUrl + '/' + str(23004425))
    # urlList.append(baseUrl + '/' + str(23006268))
    # urlList.append(baseUrl + '/' + str(23005179))
    # urlList.append(baseUrl + '/' + str(23007788))
    # urlList.append(baseUrl + '/' + str(23001706))
    # urlList.append(baseUrl + '/' + str(23001707))
    # urlList.append(baseUrl + '/' + str(23001708))
    # urlList.append(baseUrl + '/' + str(23007682))
    # urlList.append(baseUrl + '/' + str(23005427))
    # urlList.append(baseUrl + '/' + str(23005452))
    # urlList.append(baseUrl + '/' + str(23000117))
    # urlList.append(baseUrl + '/' + str(23007566))
    # urlList.append(baseUrl + '/' + str(23004428))
    # urlList.append(baseUrl + '/' + str(22017870))
    # urlList.append(baseUrl + '/' + str(23005802))
    # urlList.append(baseUrl + '/' + str(23006291))
    # urlList.append(baseUrl + '/' + str(23006613))
    # urlList.append(baseUrl + '/' + str(23007147))
    # urlList.append(baseUrl + '/' + str(23005099))
    # urlList.append(baseUrl + '/' + str(23004421))
    # urlList.append(baseUrl + '/' + str(22008371))
    # urlList.append(baseUrl + '/' + str(21007488))
    # urlList.append(baseUrl + '/' + str(22011089))
    # urlList.append(baseUrl + '/' + str(23005718))
    # urlList.append(baseUrl + '/' + str(22007314))
    # urlList.append(baseUrl + '/' + str(23007274))
    # urlList.append(baseUrl + '/' + str(23007273))
    # urlList.append(baseUrl + '/' + str(23007817))
    # urlList.append(baseUrl + '/' + str(23005826))
    # urlList.append(baseUrl + '/' + str(23006050))
    # urlList.append(baseUrl + '/' + str(23007307))
    # urlList.append(baseUrl + '/' + str(23006282))
    # urlList.append(baseUrl + '/' + str(23002429))
    # urlList.append(baseUrl + '/' + str(23006544))
    # urlList.append(baseUrl + '/' + str(23006839))
    # urlList.append(baseUrl + '/' + str(23002958))
    # urlList.append(baseUrl + '/' + str(23007610))
    # urlList.append(baseUrl + '/' + str(23007811))
    # urlList.append(baseUrl + '/' + str(21002176))
    # urlList.append(baseUrl + '/' + str(23005840))
    # urlList.append(baseUrl + '/' + str(23006990))
    # urlList.append(baseUrl + '/' + str(23000789))
    # urlList.append(baseUrl + '/' + str(22008929))
    # urlList.append(baseUrl + '/' + str(20006982))
    # urlList.append(baseUrl + '/' + str(23007872))
    # urlList.append(baseUrl + '/' + str(22003204))
    # urlList.append(baseUrl + '/' + str(23006530))
    # urlList.append(baseUrl + '/' + str(21009138))
    # urlList.append(baseUrl + '/' + str(23007789))
    # urlList.append(baseUrl + '/' + str(23007861))
    # urlList.append(baseUrl + '/' + str(23007071))
    # urlList.append(baseUrl + '/' + str(23007311))
    # urlList.append(baseUrl + '/' + str(23005659))
    # urlList.append(baseUrl + '/' + str(23005658))
    # urlList.append(baseUrl + '/' + str(23003459))
    # urlList.append(baseUrl + '/' + str(23006490))
    # urlList.append(baseUrl + '/' + str(23006025))
    # urlList.append(baseUrl + '/' + str(21007446))
    # urlList.append(baseUrl + '/' + str(23007337))
    # urlList.append(baseUrl + '/' + str(23002193))
    # urlList.append(baseUrl + '/' + str(23007167))
    # urlList.append(baseUrl + '/' + str(23004983))
    # urlList.append(baseUrl + '/' + str(23006479))
    # urlList.append(baseUrl + '/' + str(23007607))
    # urlList.append(baseUrl + '/' + str(23007622))
    # urlList.append(baseUrl + '/' + str(23007640))
    # urlList.append(baseUrl + '/' + str(23006901))
    # urlList.append(baseUrl + '/' + str(23007893))
    # urlList.append(baseUrl + '/' + str(23007297))
    # urlList.append(baseUrl + '/' + str(23000299))
    # urlList.append(baseUrl + '/' + str(23006240))
    # urlList.append(baseUrl + '/' + str(23006215))
    # urlList.append(baseUrl + '/' + str(23006329))
    # urlList.append(baseUrl + '/' + str(23006963))
    # urlList.append(baseUrl + '/' + str(22009971))
    # urlList.append(baseUrl + '/' + str(23006271))
    # # urlList.append(baseUrl + '/' + str(P0003340))
    # urlList.append(baseUrl + '/' + str(23007921))
    # urlList.append(baseUrl + '/' + str(23006645))
    # urlList.append(baseUrl + '/' + str(23007275))
    # urlList.append(baseUrl + '/' + str(23006413))
    # urlList.append(baseUrl + '/' + str(23005247))
    # urlList.append(baseUrl + '/' + str(23003619))
    # urlList.append(baseUrl + '/' + str(23007525))
    # urlList.append(baseUrl + '/' + str(23003937))
    # urlList.append(baseUrl + '/' + str(23004340))
    # urlList.append(baseUrl + '/' + str(23007166))
    # urlList.append(baseUrl + '/' + str(23005447))
    # urlList.append(baseUrl + '/' + str(23003907))
    # urlList.append(baseUrl + '/' + str(23005067))
    # urlList.append(baseUrl + '/' + str(23006877))
    # urlList.append(baseUrl + '/' + str(23006039))
    # urlList.append(baseUrl + '/' + str(23006933))
    # urlList.append(baseUrl + '/' + str(23006253))
    # urlList.append(baseUrl + '/' + str(23005987))
    # urlList.append(baseUrl + '/' + str(23007300))
    # urlList.append(baseUrl + '/' + str(19018979))
    # urlList.append(baseUrl + '/' + str(23006589))
    # urlList.append(baseUrl + '/' + str(23005403))
    # urlList.append(baseUrl + '/' + str(23001982))
    # urlList.append(baseUrl + '/' + str(23007898))
    # urlList.append(baseUrl + '/' + str(23007433))
    # urlList.append(baseUrl + '/' + str(22004587))
    # urlList.append(baseUrl + '/' + str(23006813))
    # urlList.append(baseUrl + '/' + str(23005926))
    # urlList.append(baseUrl + '/' + str(23006778))
    # urlList.append(baseUrl + '/' + str(23007615))
    # urlList.append(baseUrl + '/' + str(23000034))
    # urlList.append(baseUrl + '/' + str(23006782))
    # urlList.append(baseUrl + '/' + str(23006016))
    # urlList.append(baseUrl + '/' + str(23003754))
    # urlList.append(baseUrl + '/' + str(17000544))
    # urlList.append(baseUrl + '/' + str(23006142))
    # urlList.append(baseUrl + '/' + str(21007810))
    # urlList.append(baseUrl + '/' + str(23007656))
    # urlList.append(baseUrl + '/' + str(22016466))
    # urlList.append(baseUrl + '/' + str(23007755))
    # urlList.append(baseUrl + '/' + str(22017122))
    # urlList.append(baseUrl + '/' + str(23006881))
    # urlList.append(baseUrl + '/' + str(23007458))
    # urlList.append(baseUrl + '/' + str(23007096))
    # urlList.append(baseUrl + '/' + str(23005793))
    # urlList.append(baseUrl + '/' + str(23005778))
    # urlList.append(baseUrl + '/' + str(23005637))
    # urlList.append(baseUrl + '/' + str(23005635))
    # urlList.append(baseUrl + '/' + str(23005627))
    # urlList.append(baseUrl + '/' + str(23005631))
    # urlList.append(baseUrl + '/' + str(23005610))
    # urlList.append(baseUrl + '/' + str(23007733))
    # urlList.append(baseUrl + '/' + str(23007651))
    # urlList.append(baseUrl + '/' + str(23007838))
    # urlList.append(baseUrl + '/' + str(23007835))
    # urlList.append(baseUrl + '/' + str(23007723))
    # urlList.append(baseUrl + '/' + str(23006635))
    # urlList.append(baseUrl + '/' + str(23005500))
    # urlList.append(baseUrl + '/' + str(23005863))
    # urlList.append(baseUrl + '/' + str(23007683))
    # urlList.append(baseUrl + '/' + str(23006300))
    # urlList.append(baseUrl + '/' + str(23007541))
    # urlList.append(baseUrl + '/' + str(23006564))
    # urlList.append(baseUrl + '/' + str(23007807))
    # urlList.append(baseUrl + '/' + str(23003308))
    # urlList.append(baseUrl + '/' + str(23006639))
    # urlList.append(baseUrl + '/' + str(23006614))
    # urlList.append(baseUrl + '/' + str(23004156))
    # urlList.append(baseUrl + '/' + str(23001181))
    # urlList.append(baseUrl + '/' + str(23007900))
    # urlList.append(baseUrl + '/' + str(23006602))
    # urlList.append(baseUrl + '/' + str(23007786))
    # urlList.append(baseUrl + '/' + str(23005746))
    # urlList.append(baseUrl + '/' + str(23004685))
    # urlList.append(baseUrl + '/' + str(21002430))
    # urlList.append(baseUrl + '/' + str(23007283))
    # urlList.append(baseUrl + '/' + str(23002728))
    # urlList.append(baseUrl + '/' + str(23005488))
    # urlList.append(baseUrl + '/' + str(22017871))
    # urlList.append(baseUrl + '/' + str(22017896))
    # urlList.append(baseUrl + '/' + str(23007194))
    # urlList.append(baseUrl + '/' + str(23005803))
    # urlList.append(baseUrl + '/' + str(23006944))
    # urlList.append(baseUrl + '/' + str(23006133))
    # urlList.append(baseUrl + '/' + str(23007143))
    return urlList
# 연극 데이터 크롤링
def crawlingInterparkBasicInfo(url):
    print('========================================')
    print('<<< Start --- Crawling Interpark >>>')
    print('========================================')

    # <<< 크롬 옵션 설정 >>> #
    chromeOptions = webdriver.ChromeOptions()
    # chromeOptions.add_argument('--headless')
    chromeOptions.add_argument('--window-size=1280,720')
    chromeOptions.add_argument('--no-sandbox')

    # <<< 크롬 브라우저 실행 >>> #
    browser = webdriver.Chrome('./chromedriver', chrome_options=chromeOptions)

    browser.get(url)

    # 해당 태그가 나타날 때 까지 대기
    try:
        WebDriverWait(browser, 5).until(EC.presence_of_element_located((By.CLASS_NAME, "popPriceTable")))
    except TimeoutException as te:
        print('Error!!! TimeOutException!!!')
        browser.quit()
        # break
        return
    except Exception as e:
        print('Error!!! Exception!!!')
        traceback.print_exc()
        browser.quit()
        # break
        return

    # 경고 창 제거, 없다면 무시
    # ******************** #
    try:
        browser.find_element(By.CSS_SELECTOR, '#popup-prdGuide > div > div.popupFooter > button').click()
    except NoSuchElementException:
        pass

    time.sleep(1)


    # 타이틀 추출
    # ******************** #
    full_title = browser.find_element(By.CLASS_NAME, 'prdTitle').text
    # start_index = full_title.find('〈') + 1
    # end_index = full_title.find('〉')
    # title = full_title[start_index:end_index]
    print('타이틀: ' + full_title)
    # print('타이틀: ' + browser.find_element(By.CLASS_NAME, 'prdTitle').text)

    time.sleep(0.5)

    # 포스터 주소 추출
    # ******************** #
    posterSource = browser.find_element(By.CSS_SELECTOR, '#container > div.contents > div.productWrapper > div.productMain > div.productMainTop > div > div.summaryBody > div > div.posterBoxTop > img').get_attribute('src')
    print('포스터 주소: ' + posterSource)

    # 아래 요소 추출
    # ******************** #
    # 장소
    # (한정 판매) 공연기간, 공연시간 / (상시 판매) 기간
    # 관람 연령
    # 가격

    informList = browser.find_element(By.CSS_SELECTOR, '#container > div.contents > div.productWrapper > div.productMain > div.productMainTop > div > div.summaryBody > ul').find_elements(By.CLASS_NAME, 'infoItem')
    for inform in informList:
        # print('속성 값: ' + inform.get_attribute('class'))
        attribute = inform.get_attribute('class')
        print('==========')

        # 장소, (한정 판매) 공연기간, 공연시간 / (상시 판매) 기간, 관람연령 출력
        if attribute == 'infoItem':
            print('속성 값: infoItem')
            # 장소 출력
            if inform.find_element(By.CLASS_NAME, 'infoLabel').text == '장소':
                inform.find_element(By.CSS_SELECTOR, 'div > a').click()
                #장소 이름
                place = browser.find_element(By.CSS_SELECTOR, '#container > div.contents > #popup-info-place > div.popupWrap> div.popupBody>div>div.popPlaceTitle>a').text
                print("장소 : " + place)
                #주소
                if browser.find_element(By.CSS_SELECTOR, '#container > div.contents > #popup-info-place > div.popupWrap> div.popupBody>div>div.popPlaceInfo> p').text[0:2] == '주소' : 
                    addr = browser.find_element(By.CSS_SELECTOR, '#container > div.contents > #popup-info-place > div.popupWrap> div.popupBody>div>div.popPlaceInfo> p > span').text
                else : addr = browser.find_element(By.CSS_SELECTOR, '#container > div.contents > #popup-info-place > div.popupWrap> div.popupBody>div>div.popPlaceInfo> p:nth-child(2) > span').text
                print("주소 : " + addr)
                browser.find_element(By.CSS_SELECTOR, '#container > div.contents > #popup-info-place > div.popupWrap > div.popupHead > button').click()

            # (한정) 공연기간 출력
            if inform.find_element(By.CLASS_NAME, 'infoLabel').text == '공연기간':
                periodInfo = inform.find_element(By.CLASS_NAME, 'infoDesc').text
                # 공연 기간이 나뉘어져 있다면 나뉘어 추출
                isTerm = periodInfo.find(' ~')
                if isTerm == -1:
                    print('공연기간: ' + periodInfo)
                else:
                    periodInfoTerm = periodInfo.split(' ~')
                    print('(시작) 공연기간 :' + periodInfoTerm[0])
                    print('(끝) 공연기간 :' + periodInfoTerm[1])
            # (한정) 공연시간 출력
            if inform.find_element(By.CLASS_NAME, 'infoLabel').text == '공연시간':
                timeInfo = inform.find_element(By.CLASS_NAME, 'infoDesc').text
                isIntermission = timeInfo.find('인터미션')
                if isIntermission == -1:
                    print('공연시간: ' + timeInfo)
                else:
                    timeInfoFindAllList = re.findall(r'[0-9]+분', timeInfo)
                    print('공연시간: ' + timeInfoFindAllList[0])
                    print('인터미션: ' + timeInfoFindAllList[1])
            # (상시) 기간 출력
            if inform.find_element(By.CLASS_NAME, 'infoLabel').text == '기간':
                print('기간: ' + inform.find_element(By.CLASS_NAME, 'infoDesc').text)
            # 관람연령 출력
            if inform.find_element(By.CLASS_NAME, 'infoLabel').text == '관람연령':
                ageInfo = inform.find_element(By.CLASS_NAME, 'infoDesc').text
                notice_image = browser.find_element(By.CSS_SELECTOR,'#container > div.contents > div.productWrapper > div.productMain > div.productMainBody > div > div.content > div > img').get_attribute('src')
                print("공지사항 이미지 : " + notice_image)
                # 공연 상세 정보 이미지 
                info_image = browser.find_element(By.CSS_SELECTOR, '#container > div.contents > div.productWrapper > div.productMain > div.productMainBody > div > div.content.description img').get_attribute('src')
                print("공연 상세 정보 이미지 : " + info_image)
                conn = pymysql.connect(host="127.0.0.1", user="root", password="1234", db="kh_final_play_time", charset="utf8")
                cur = conn.cursor()
                # 연극 id 추출
                number = re.search(r'\d+', url).group()
                cur.execute(f"INSERT INTO PLAY_INFO (PLAY_ID,TITLE,PERIOD_START,PERIOD_END,PLAY_TIME,PLAY_AGE,info_image_url, poster_image_url,notice_image_url,theater_name) VALUES('{number}', '{full_title}', '{periodInfoTerm[0]}', '{periodInfoTerm[1]}','{timeInfo}','{ageInfo}','{info_image}','{posterSource}','{notice_image}','{place}')")
        
        # 가격 요소 출력
        if attribute == 'infoItem infoPrice':
            print('속성 값: infoItem infoPrice')
            infoPriceItemList = inform.find_elements(By.CSS_SELECTOR, 'div > ul > li.infoPriceItem')
            count = 0
            # 좌석이 모두 동일할 경우를 확인
            seatInfoList = []
            # 가격 요소 출력, 전체 가격 보기 요소 제외
            for infoPriceItem in infoPriceItemList[1:]:
                count = count + 1
                print('*** ' + str(count) + '번째 가격 요소 출력 ***')
                # span 태그로 정렬 되었을 때 좌석, 가격 요소 추출
                # 다른 구조로 정렬 되었을 때 except 문으로 이동해서 추출
                try:
                    seatInfo = infoPriceItem.find_element(By.CSS_SELECTOR, 'span.name').text
                    seatInfoList.append(seatInfo)
                    priceInfo = infoPriceItem.find_element(By.CSS_SELECTOR, 'span.price').text
                    price = re.sub('원|,', '', priceInfo)
                    print('--- 좌석: ' + seatInfo)
                    print('--- 가격: ' + price)
                    cur.execute(f"INSERT INTO SEAT (PLAY_ID,SEAT_RATING,PRICE) VALUES('{number}', '{seatInfo}','{price}')")

                # 다른 구조로 요소가 정렬 되었을 때
                except NoSuchElementException:
                    prdPriceDetailList = infoPriceItem.find_element(By.CLASS_NAME, 'prdPriceDetail').find_elements(By.TAG_NAME, 'li')
                    for prdPriceDetail in prdPriceDetailList:
                        seatInfo = re.search(r'(.*?)석', prdPriceDetail.text).group(1)
                        print('---좌석: ' + seatInfo)
                        priceInfoSpace = re.sub(seatInfo, '', prdPriceDetail.text)
                        # 공백, '원' 제외
                        print('---가격: ' + re.sub(r'석|\s+|원', '', priceInfoSpace))

            # 좌석 정보에 중복이 있는지 확인
            # 없다면 생략, 있다면 상세 정보 표기
            if len(seatInfoList) == len(set(seatInfoList)):
                pass
            else:
                # 전체 가격 보기 클릭
                browser.find_element(By.CSS_SELECTOR, '#container > div.contents > div.productWrapper > div.productMain > div.productMainTop > div > div.summaryBody > ul > li.infoItem.infoPrice > div > ul > li.infoPriceItem.is-largePrice > a').click()

                time.sleep(0.5)

                # 상세한 가격 정보 선택
                detailInfoList = browser.find_element(By.CSS_SELECTOR, '#popup-info-price > div > div.popupBody > div > div > table > tbody').find_elements(By.CSS_SELECTOR, 'tr')

                for detailInfo in detailInfoList:
                    detailInfoText = detailInfo.text
                    try:
                        # 카테고리 영역이 있다면 제외
                        categoryInfo = detailInfo.find_element(By.CLASS_NAME, 'category').text
                        detailInfoText = re.sub(categoryInfo + ' ', '', detailInfoText)
                    except NoSuchElementException:
                        pass
                    detailSeatInfo = detailInfoText.split(' ')[0]
                    detailPriceInfo = detailInfoText.split(' ')[1]
                    print('*** 상세 정보 => 좌석: ' + detailSeatInfo)
                    print('*** 상세 정보 => 가격: ' + re.sub(r'원|,', '', detailPriceInfo))

                browser.find_element(By.CSS_SELECTOR, '#popup-info-price > div > div.popupHead > button').click()

                time.sleep(0.5)

        if attribute == 'infoItem infoBenefit':
            print('속성 값: infoItem infoBenefit')
        if attribute == 'infoItem infoRelated':
            print('속성 값: infoItem infoRelated')
        print('디버깅 요소 - 헤더: ' + inform.find_element(By.CLASS_NAME, 'infoLabel').text)
        print('디버깅 요소 - 내용: ' + inform.find_element(By.CLASS_NAME, 'infoDesc').text)
 
    cur.execute(f"INSERT INTO THEATER (THEATER_NAME,ADDR,PLAY_ID) VALUES('{place}', '{addr}','{number}')")

    #배우 정보 삽입
    try:
        # 더보기 버튼 클릭
        browser.find_element(By.CSS_SELECTOR, '#productMainBody > div > div.content.casting > div > a').click()
        time.sleep(1)
    except NoSuchElementException:
            pass
    try:
        # 캐스팅 정보 출력
        castingContent = browser.find_element(By.CSS_SELECTOR, '#productMainBody > div > div.content.casting')
        castingList = castingContent.find_elements(By.CSS_SELECTOR, 'div.expandalbeWrap > ul > li')
        for casting in castingList:
            print('<-=*-=*-=*-=*-=*-=*-=*-=*-=*-=*-=*-=*-=*->')
            # 캐스팅 역
            castingActor = casting.find_element(By.CSS_SELECTOR, 'div.castingInfo > div.castingActor').text
            print('캐스팅 역: ' + castingActor)
            # 캐스팅 배우 이름
            castingName = casting.find_element(By.CSS_SELECTOR, 'div.castingInfo > div.castingName').text
            print('캐스팅 배우: ' + castingName)
            # 캐스팅 이미지 링크
            castingImgPath = casting.find_element(By.CSS_SELECTOR, 'div.castingTop > a.castingLink > div.castingProfile > img').get_attribute('src')
            print('캐스팅 이미지 링크: ' + castingImgPath)
            cur.execute(f"INSERT INTO ACTOR (ACTOR_NAME,ROLE_NAME,ACTOR_IMAGE,PLAY_ID) VALUES('{castingName}', '{castingActor}', '{castingImgPath}','{number}')")

    except NoSuchElementException:
            pass

    conn.commit()
    conn.close()
    time.sleep(0.5)
# 연극 리스트 크롤링
def crawlingRankingUrlList():
    allBaseListUrl = 'http://ticket.interpark.com/TPGoodsList.asp'

    # 연극
    allRankingListUrl = allBaseListUrl + '?Ca=Dra'

    todayRanking = allRankingListUrl + '&Sort=1'
    weekRanking = allRankingListUrl + '&Sort=2'
    monthRanking = allRankingListUrl + '&Sort=3'
    sortByNameAsc = allRankingListUrl + '&Sort=4'
    closeSoonAsc = allRankingListUrl + '&Sort=5'

    print('========================================')
    print('<<< Start --- Crawling Interpark >>>')
    print('========================================')

    # <<< 크롬 옵션 설정 >>> #
    chromeOptions = webdriver.ChromeOptions()
    # chromeOptions.add_argument('--headless')
    chromeOptions.add_argument('--window-size=1280,720')
    chromeOptions.add_argument('--no-sandbox')

    # <<< 크롬 브라우저 실행 >>> #
    browser = webdriver.Chrome('./chromedriver', chrome_options=chromeOptions)

    browser.get(todayRanking)

    # 해당 태그가 나타날 때 까지 대기
    try:
        WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.CLASS_NAME, 'RK_total2')))
    except TimeoutException as te:
        print('Error!!! TimeOutException!!!')
        browser.quit()
        # break
        return
    except Exception as e:
        print('Error!!! Exception!!!')
        traceback.print_exc()
        browser.quit()
        # break
        return

    totalCountElement = browser.find_element(By.CLASS_NAME, 'RK_total2')
    totalCount = re.search(r'\d+', totalCountElement.find_element(By.CSS_SELECTOR, 'span').text).group(0)

    # 마지막 요소 탐색
    lastElement = 'div.sR_w755 > div.Rk_gen2 > div.con > div > table > tbody > tr:nth-child(' + str(totalCount) + ')'

    try:
        WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, lastElement)))
    except TimeoutException as te:
        print('Error!!! TimeOutException!!!')
        browser.quit()
        # break
        return
    except Exception as e:
        print('Error!!! Exception!!!')
        traceback.print_exc()
        browser.quit()
        # break

    for index in range(1, int(totalCount) + 1):
        currentElementCSSPath = 'div.sR_w755 > div.Rk_gen2 > div.con > div > table > tbody > tr:nth-child(' + str(index) + ') > td.RKtxt > span > a'
        currentElementUrl = browser.find_element(By.CSS_SELECTOR, currentElementCSSPath).get_attribute('href')
        currentUrlKey = re.sub('GroupCode=', '', currentElementUrl.split('?')[1])

        print(str(index) + '번째 url Key = ' + currentUrlKey)

    # lastUrl = browser.find_element(By.CSS_SELECTOR, lastElement + ' > td.RKtxt > span > a').get_attribute('href')
    #
    # print(re.sub('GroupCode=', '', lastUrl.split('?')[1]))

if __name__ == '__main__':
    urlList = createUrlOfInterpark()

    for url in urlList:
        crawlingInterparkBasicInfo(url)


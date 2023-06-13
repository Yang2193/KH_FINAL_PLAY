import crawlingPlay as cp

if __name__ == '__main__':
    urlList = cp.createUrlOfInterpark()

    for url in urlList:
        cp.crawlingInterparkBasicInfo(url)


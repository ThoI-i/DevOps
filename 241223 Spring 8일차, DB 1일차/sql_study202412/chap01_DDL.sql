-- 테이블 생성 (DDL: 데이터 정의어)
-- 학생의 성적정보를 저장
CREATE TABLE TBL_SCORE (
    STU_ID NUMBER(6) PRIMARY KEY,
    STU_NAME VARCHAR2(20) NOT NULL,
    KOR NUMBER(3) NOT NULL CHECK(KOR >= 0 AND KOR <= 100),
    ENG NUMBER(3) NOT NULL CHECK(ENG >= 0 AND ENG <= 100),
    MATH NUMBER(3) NOT NULL CHECK(MATH >= 0 AND MATH <= 100),
    TOTAL NUMBER(3),
    AVERAGE NUMBER(5, 2),
    GRADE CHAR(1)
);


-- ALTER문으로 제약조건 추가해보기
-- Average에 unique 제약을 걸고 싶음
ALTER TABLE TBL_SCORE
ADD CONSTRAINT unique_average 
UNIQUE (average);

-- unique를 해제하고 싶음
ALTER TABLE TBL_SCORE
DROP CONSTRAINT unique_average;

-- 컬럼 추가하기
ALTER TABLE TBL_SCORE
ADD (science NUMBER(3) NOT NULL);

-- 컬럼 제거하기
ALTER TABLE TBL_SCORE
DROP COLUMN science;

INSERT INTO TBL_SCORE
    (STU_ID, STU_NAME, KOR, ENG, MATH)
VALUES
    (1, '뽀롱롱', 100, 70, 50);

INSERT INTO TBL_SCORE
    (STU_ID, STU_NAME, KOR, ENG, MATH)
    VALUES
    (2, '하츄핑', 70, 100, 98);
    
    SELECT * FROM TBL_SCORE;
    
-- TRUNCATE TABLE : 테이블 내 데이터 전체 삭제
TRUNCATE TABLE TBL_SCORE;

-- DROP TABLE : 테이블을 삭제
DROP TABLE TBL_SCORE;

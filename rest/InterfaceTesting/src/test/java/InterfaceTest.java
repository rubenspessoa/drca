import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.sql.Time;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by rubenspessoa on 22/10/16.
 */

public class InterfaceTest {

    private static ChromeDriverService service;
    private WebDriver driver;

    @BeforeClass
    public static void createAndStartService() throws IOException {
        service = new ChromeDriverService.Builder()
                .usingDriverExecutable(new File("/Users/rubenspessoa/Downloads/chromedriver"))
                .usingAnyFreePort()
                .build();
        service.start();
    }

    @AfterClass
    public static void createAndStopService() {
        //service.stop();
    }

    @Before
    public void createDriver() {
        driver = new RemoteWebDriver(service.getUrl(),
                DesiredCapabilities.chrome());
        driver.manage().timeouts().implicitlyWait(300, TimeUnit.SECONDS);
        driver.get("http://localhost:3000/");
    }

    @After
    public void quitDriver() {
        //driver.quit();
    }

    @Test
    public void testEnrollment1() {
        this.clickStudentThenDiscipline(0, 0);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertEquals(msg.getText(), "Matricula efetuada com sucesso.");
    }

    @Test
    public void testEnrollment2() {
        this.clickStudentThenDiscipline(0, 1);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertEquals(msg.getText(), "Pré-requisitos não atendidos.");
    }

    @Test
    public void testEnrollment3() {
        this.clickStudentThenDiscipline(0, 2);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertEquals(msg.getText(), "Matricula efetuada com sucesso.");
    }

    @Test
    public void testEnrollment4() {
        this.clickStudentThenDiscipline(0, 3);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertNotEquals(msg.getText(), "Matricula efetuada com sucesso.");
        Assert.assertEquals(msg.getText(), "Disciplina indisponível.");
    }

    @Test
    public void testEnrollment5() {
        this.clickStudentThenDiscipline(0, 4);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertNotEquals(msg.getText(), "Matricula efetuada com sucesso.");
        Assert.assertEquals(msg.getText(), "O aluno já está matriculado na disciplina.");
    }

    @Test
    public void testEnrollment6() {
        this.clickStudentThenDiscipline(0, 5);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertEquals(msg.getText(), "Matricula efetuada com sucesso.");
        Assert.assertNotEquals(msg.getText(), "O aluno já está matriculado na disciplina.");
    }

    @Test
    public void testEnrollment7() {
        this.clickStudentThenDiscipline(0, 6);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertEquals(msg.getText(), "Disciplina indisponível.");
        Assert.assertNotEquals(msg.getText(), "Pré-requisitos não atendidos.");
    }

    @Test
    public void testEnrollment8() {
        this.clickStudentThenDiscipline(0, 7);
        WebElement msg = this.clickEnroll();
        this.waitForChanges();
        msg = driver.findElement(By.id("msgReturned"));

        Assert.assertNotEquals(msg.getText(), "Disciplina indisponível.");
        Assert.assertEquals(msg.getText(), "Pré-requisitos não atendidos.");
    }

    @Test
    public void testWebSite() {
        WebElement departmentsBtn = driver.findElement(By.id("departmentsBtn"));
        WebElement enrollmentBtn = driver.findElement(By.id("enrollmentBtn"));
        departmentsBtn.click();
        enrollmentBtn.click();
        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        departmentsBtn.click();
        enrollmentBtn.click();
        studentsLink.get(4).click();
        departmentsBtn.click();
        enrollmentBtn.click();
    }

    @Test
    public void testDepartment1() {
        WebElement departmentsBtn = driver.findElement(By.id("departmentsBtn"));
        departmentsBtn.click();
        List<WebElement> departmentLinks = driver.findElements(By.id("departmentId"));
        departmentLinks.get(0).click();
        List<WebElement> secretariatLinks = driver.findElements(By.id("secretariatId"));
        secretariatLinks.get(0).click();
    }

    @Test
    public void testDepartment2() {
        WebElement departmentsBtn = driver.findElement(By.id("departmentsBtn"));
        departmentsBtn.click();
        List<WebElement> departmentLinks = driver.findElements(By.id("departmentId"));
        departmentLinks.get(0).click();
        List<WebElement> secretariatLinks = driver.findElements(By.id("secretariatId"));
        secretariatLinks.get(1).click();
    }

    @Test
    public void testDepartment3() {
        WebElement departmentsBtn = driver.findElement(By.id("departmentsBtn"));
        departmentsBtn.click();
        List<WebElement> departmentLinks = driver.findElements(By.id("departmentId"));
        departmentLinks.get(1).click();
        List<WebElement> secretariatLinks = driver.findElements(By.id("secretariatId"));
        secretariatLinks.get(0).click();
    }

    @Test
    public void testLogDiscipline1() {
        testDepartment1();
        List<WebElement> disciplineLinks = driver.findElements(By.id("disciplineId"));
        disciplineLinks.get(0).click();
    }

    @Test
    public void testLogDiscipline2() {
        testDepartment1();
        List<WebElement> disciplineLinks = driver.findElements(By.id("disciplineId"));
        disciplineLinks.get(3).click();
    }

    @Test
    public void testLogDiscipline3() {
        testDepartment1();
        List<WebElement> disciplineLinks = driver.findElements(By.id("disciplineId"));
        disciplineLinks.get(2).click();
    }

    @Test
    public void testLogDiscipline4() {
        testDepartment3();
        List<WebElement> disciplineLinks = driver.findElements(By.id("disciplineId"));
        disciplineLinks.get(0).click();
    }


    @Test
    public void testLogStudent1() {
        testDepartment1();
        List<WebElement> studentLinks = driver.findElements(By.id("studentId"));
        studentLinks.get(0).click();
    }

    @Test
    public void testLogStudent2() {
        testDepartment2();
        List<WebElement> studentLinks = driver.findElements(By.id("studentId"));
        studentLinks.get(0).click();
    }

    @Test
    public void testLogStudent3() {
        testDepartment1();
        List<WebElement> studentLinks = driver.findElements(By.id("studentId"));
        studentLinks.get(2).click();
    }

    @Test
    public void testLogStudent4() {
        testDepartment3();
        List<WebElement> studentLinks = driver.findElements(By.id("studentId"));
        studentLinks.get(0).click();
    }

    private void waitForChanges() {
        WebDriverWait wait = new WebDriverWait(driver,10);

        wait.until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                WebElement new_msg = driver.findElement(By.id("msgReturned"));
                if(!new_msg.getText().equals("processando..."))
                    return true;
                else
                    return false;
            }
        });
    }

    private void clickStudentThenDiscipline(int i, int j) {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(i).click();

        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        disciplinesLink.get(j).click();
    }

    private WebElement clickEnroll() {
        WebElement button = driver.findElement(By.id("enrollbtn"));
        button.click();

        WebElement msg = driver.findElement(By.id("msgReturned"));
        Assert.assertEquals(msg.getText(), "processando...");

        return msg;
    }

}

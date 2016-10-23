import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.io.File;
import java.io.IOException;
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
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void quitDriver() {
        //driver.quit();
    }

    @Test
    public void test1Enrollment1() {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));

        disciplinesLink.get(0).click();
        WebElement button = driver.findElement(By.id("enrollbtn"));
        // comparar mensagem recebida com a esperada.
        button.click();
    }

    @Test
    public void test1Enrollment2() {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));

        disciplinesLink.get(0).click();
        WebElement button = driver.findElement(By.id("enrollbtn"));
        // comparar mensagem recebida com a esperada.
        button.click();
    }

    @Test
    public void test1Enrollment3() {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));

        disciplinesLink.get(0).click();
        WebElement button = driver.findElement(By.id("enrollbtn"));
        // comparar mensagem recebida com a esperada.
        button.click();
    }

    @Test
    public void testDepartment1() {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));

        disciplinesLink.get(0).click();
        WebElement button = driver.findElement(By.id("enrollbtn"));
        // comparar mensagem recebida com a esperada.
        button.click();
    }

    @Test
    public void testDepartment2() {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));

        disciplinesLink.get(0).click();
        WebElement button = driver.findElement(By.id("enrollbtn"));
        // comparar mensagem recebida com a esperada.
        button.click();
    }

    @Test
    public void testDepartment3() {
        driver.get("http://localhost:3000/");

        List<WebElement> studentsLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));
        studentsLink.get(0).click();
        List<WebElement> disciplinesLink = driver.findElement(By.className("list-unstyled")).findElements(By.tagName("a"));

        disciplinesLink.get(0).click();
        WebElement button = driver.findElement(By.id("enrollbtn"));
        // comparar mensagem recebida com a esperada.
        button.click();
    }

}

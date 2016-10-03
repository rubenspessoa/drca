package Management;

/**
 * Created by rubenspessoa on 02/10/16.
 */
public class DisciplinePreRequisites {
    Discipline origin;
    Discipline preRequisite;

    public DisciplinePreRequisites(Discipline origin, Discipline preRequisite) {
        this.origin = origin;
        this.preRequisite = preRequisite;
    }
}
